// Quick script to check total question count in Supabase
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tdclflxovwhqutaikvuj.supabase.co'
const supabaseKey = 'sb_publishable_S1gzl7ByNvwWie2KVevuuw_Y97MB2mp'

const supabase = createClient(supabaseUrl, supabaseKey)

async function checkQuestionCount() {
    console.log('📊 Checking question count in Supabase...\n')

    // Get total count
    const { count, error } = await supabase
        .from('questions')
        .select('*', { count: 'exact', head: true })

    if (error) {
        console.error('❌ Error:', error.message)
        return
    }

    console.log(`✅ Total questions in database: ${count}`)

    // Get a sample to show details
    const { data: sample, error: sampleError } = await supabase
        .from('questions')
        .select('id, question_text, category, image_name')
        .order('id')
        .limit(5)

    if (sample && !sampleError) {
        console.log('\n📝 Sample of first 5 questions:')
        sample.forEach(q => {
            console.log(`  [ID ${q.id}] ${q.question_text.substring(0, 60)}... (${q.category || 'No category'})${q.image_name ? ' 🖼️' : ''}`)
        })
    }

    // Check how many have images
    const { count: imageCount, error: imgError } = await supabase
        .from('questions')
        .select('*', { count: 'exact', head: true })
        .not('image_name', 'is', null)

    if (!imgError) {
        console.log(`\n🖼️  Questions with images: ${imageCount}`)
    }

    // Breakdown by category
    const { data: categories, error: catError } = await supabase
        .from('questions')
        .select('category')

    if (categories && !catError) {
        const catCounts = {}
        categories.forEach(q => {
            const cat = q.category || 'Uncategorized'
            catCounts[cat] = (catCounts[cat] || 0) + 1
        })

        console.log('\n📂 Questions by category:')
        Object.entries(catCounts)
            .sort((a, b) => b[1] - a[1])
            .forEach(([cat, count]) => {
                console.log(`  ${cat}: ${count}`)
            })
    }
}

checkQuestionCount()
