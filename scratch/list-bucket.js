import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing env vars')
    process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function run() {
    console.log('Listing bucket objects...')
    const { data, error } = await supabase
        .storage
        .from('quiz-images')
        .list()

    if (error) {
        console.error('Error:', error)
        process.exit(1)
    }

    console.log(`Found ${data?.length} files in bucket:`)
    if (data) {
        data.slice(0, 20).forEach(file => {
            console.log(`- ${file.name}`)
        })
        if (data.length > 20) {
            console.log(`... and ${data.length - 20} more files`)
        }
    }
}

run()
