// Diagnostic: Check actual Supabase schema
import { supabase } from './services/supabase'

async function diagnoseSchema() {
    console.log('🔍 Diagnosing Supabase Schema...\n')

    const { data, error } = await supabase
        .from('questions')
        .select('*')
        .limit(1)

    if (error) {
        console.error('❌ Error:', error)
        return
    }

    if (data && data.length > 0) {
        console.log('✅ Sample question row:')
        console.log(JSON.stringify(data[0], null, 2))
        console.log('\n🔑 Column names found:')
        Object.keys(data[0]).forEach(key => {
            console.log(`  - ${key}`)
        })
    }
}

diagnoseSchema()
