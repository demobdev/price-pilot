import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { migrate } from 'drizzle-orm/neon-http/migrator';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

if (!process.env.DATABASE_URL) {
  console.error('❌ DATABASE_URL is not defined in environment');
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql);

const main = async () => {
  console.log('🚀 Starting migration...');
  console.log('📂 Using migrations from:', './src/drizzle/migrations');
  
  try {
    await migrate(db, { 
      migrationsFolder: './src/drizzle/migrations',
      migrationsTable: 'drizzle_migrations'
    });
    console.log('✅ Migration completed successfully');
    console.log('🔍 Checking database connection...');
    
    // Test query to verify connection
    await sql`SELECT NOW();`;
    console.log('📡 Database connection verified');
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
  process.exit(0);
};

console.log('🔌 Connecting to database...');
main(); 