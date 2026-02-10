// Security test: verify that anon key cannot write to the database
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Missing environment variables.')
    process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function testSecurity() {
    console.log('🔒 Running security tests...\n')

    // Test 1: Can we READ? (should succeed)
    console.log('Test 1: SELECT (read) access...')
    const { data: readData, error: readError } = await supabase
        .from('questions')
        .select('id')
        .limit(1)

    if (readError) {
        console.log('  ❌ READ failed:', readError.message)
    } else {
        console.log('  ✅ READ works (expected - this is fine)')
    }

    // Test 2: Can we INSERT? (should FAIL)
    console.log('\nTest 2: INSERT (write) access...')
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
        console.log('  ✅ INSERT blocked:', insertError.message, '(GOOD - RLS is working!)')
    } else {
        console.log('  ⚠️  INSERT succeeded! RLS may not be configured correctly.')
        console.log('  → You should add a restrictive INSERT policy in Supabase.')
        // Clean up the test row
        await supabase.from('questions').delete().eq('question_text', 'SECURITY TEST - DELETE ME')
    }

    // Test 3: Can we UPDATE? (should FAIL)
    console.log('\nTest 3: UPDATE (modify) access...')
    const { error: updateError } = await supabase
        .from('questions')
        .update({ question_text: 'HACKED' })
        .eq('id', 1)

    if (updateError) {
        console.log('  ✅ UPDATE blocked:', updateError.message, '(GOOD - RLS is working!)')
    } else {
        console.log('  ⚠️  UPDATE succeeded! RLS may not be configured correctly.')
        // Note: we can't easily undo this without knowing the original text
    }

    // Test 4: Can we DELETE? (should FAIL)
    console.log('\nTest 4: DELETE access...')
    const { error: deleteError } = await supabase
        .from('questions')
        .delete()
        .eq('id', 99999) // non-existent ID to be safe

    if (deleteError) {
        console.log('  ✅ DELETE blocked:', deleteError.message, '(GOOD - RLS is working!)')
    } else {
        console.log('  ⚠️  DELETE did not error (could be fine if no rows matched)')
    }

    console.log('\n' + '='.repeat(50))
    console.log('🔒 Security test complete!')
}

testSecurity()
