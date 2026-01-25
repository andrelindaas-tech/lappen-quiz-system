// Quick schema inspection script
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabase = createClient(
  'https://tdclflxovwhqutaikvuj.supabase.co',
  'sb_publishable_S1gzl7ByNvwWie2KVevuuw_Y97MB2mp'
)

console.log('🔍 Inspecting Supabase schema...\n')

// Try to fetch from questions table
const { data, error } = await supabase
  .from('questions')
  .select('*')
  .limit(1)

if (error) {
  console.error('❌ Error connecting:', error.message)
  console.error('Full error:', error)
} else {
  console.log('✅ Connected successfully!')
  console.log('\n📋 Sample question record:')
  console.log(JSON.stringify(data[0], null, 2))
  
  console.log('\n🔑 Detected columns:')
  if (data[0]) {
    Object.keys(data[0]).forEach(col => {
      console.log(`  - ${col}: ${typeof data[0][col]}`)
    })
  }
}

// Get total count
const { count } = await supabase
  .from('questions')
  .select('*', { count: 'exact', head: true })

console.log(`\n📊 Total questions in database: ${count}`)
