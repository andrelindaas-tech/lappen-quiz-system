// Security test: verify that anon key cannot select questions directly, but can call RPCs
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Missing environment variables in .env.local')
    process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function testSecurity() {
    console.log('🔒 Running updated security tests...\n')

    // Test 1: Direct SELECT from 'questions' (should FAIL after migration is run)
    console.log('Test 1: Direct SELECT (read) access on public.questions...')
    const { data: readData, error: readError } = await supabase
        .from('questions')
        .select('id')
        .limit(1)

    if (readError) {
        console.log(`  ` + `✅ SELECT blocked: ${readError.message} (expected - direct access is secure!)`)
    } else {
        console.log('  ⚠️  SELECT succeeded! Direct table access is STILL open.')
        console.log('  → Make sure to run: REVOKE SELECT ON public.questions FROM anon;')
    }

    // Test 2: RPC get_questions_by_ids (should SUCCEED)
    console.log('\nTest 2: RPC get_questions_by_ids access...')
    const { data: rpcData, error: rpcError } = await supabase
        .rpc('get_questions_by_ids', { p_ids: [1] })

    if (rpcError) {
        console.log('  ❌ RPC get_questions_by_ids failed:', rpcError.message)
    } else {
        console.log(`  ✅ RPC get_questions_by_ids works (retrieved ${rpcData?.length || 0} questions)`)
    }

    // Test 3: RPC get_question_count (should SUCCEED)
    console.log('\nTest 3: RPC get_question_count access...')
    const { data: countData, error: countError } = await supabase
        .rpc('get_question_count')

    if (countError) {
        console.log('  ❌ RPC get_question_count failed:', countError.message)
    } else {
        console.log(`  ✅ RPC get_question_count works (count: ${countData})`)
    }

    // Test 4: RPC get_random_questions (should SUCCEED)
    console.log('\nTest 4: RPC get_random_questions access...')
    const { data: randomData, error: randomError } = await supabase
        .rpc('get_random_questions', { p_count: 5 })

    if (randomError) {
        console.log('  ❌ RPC get_random_questions failed:', randomError.message)
    } else {
        console.log(`  ✅ RPC get_random_questions works (retrieved ${randomData?.length || 0} questions)`)
    }

    // Test 5: RPC get_random_questions_by_category (should SUCCEED)
    console.log('\nTest 5: RPC get_random_questions_by_category access...')
    const { data: catData, error: catError } = await supabase
        .rpc('get_random_questions_by_category', { p_count: 5, p_category: 'skilt' })

    if (catError) {
        console.log('  ❌ RPC get_random_questions_by_category failed:', catError.message)
    } else {
        console.log(`  ✅ RPC get_random_questions_by_category works (retrieved ${catData?.length || 0} questions)`)
    }

    // Test 6: Can we INSERT? (should FAIL)
    console.log('\nTest 6: INSERT (write) access...')
    const { error: insertError } = await supabase
        .from('questions')
        .insert({
            question_text: 'SECURITY TEST - DELETE ME',
            options: ['A', 'B', 'C', 'D'],
            correct_answer: 'A',
            category: 'test',
            explanation: 'test'
        })

    if (insertError) {
        console.log('  ✅ INSERT blocked:', insertError.message, '(GOOD - RLS/Permissions working!)')
    } else {
        console.log('  ⚠️  INSERT succeeded! RLS/Permissions may not be configured correctly.')
        // Clean up the test row
        await supabase.from('questions').delete().eq('question_text', 'SECURITY TEST - DELETE ME')
    }

    // Test 7: Can we UPDATE? (should FAIL)
    console.log('\nTest 7: UPDATE (modify) access...')
    const { error: updateError } = await supabase
        .from('questions')
        .update({ question_text: 'HACKED' })
        .eq('id', 1)

    if (updateError) {
        console.log('  ✅ UPDATE blocked:', updateError.message, '(GOOD - RLS/Permissions working!)')
    } else {
        console.log('  ⚠️  UPDATE succeeded! RLS/Permissions may not be configured correctly.')
    }

    // Test 8: Can we DELETE? (should FAIL)
    console.log('\nTest 8: DELETE access...')
    const { error: deleteError } = await supabase
        .from('questions')
        .delete()
        .eq('id', 99999)

    if (deleteError) {
        console.log('  ✅ DELETE blocked:', deleteError.message, '(GOOD - RLS/Permissions working!)')
    } else {
        console.log('  ⚠️  DELETE did not error (could be fine if no rows matched)')
    }

    console.log('\n' + '='.repeat(50))
    console.log('🔒 Security test complete!')
}

testSecurity()
