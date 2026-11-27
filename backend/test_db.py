import asyncio
import os
from pathlib import Path
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

load_dotenv(dotenv_path=Path(__file__).resolve().parents[1] / ".env")

async def test_connection():
    uri = os.getenv("MONGO_URI")
    if not uri:
        raise RuntimeError("Set MONGO_URI in the repository environment.")
    print("Connecting to the configured MongoDB...")
    try:
        client = AsyncIOMotorClient(uri, serverSelectionTimeoutMS=2000)
        # The ismaster command is cheap and does not require auth.
        await client.admin.command('ismaster')
        print("✅ Successfully connected to MongoDB!")
        
        db = client.get_database()
        print(f"Using database: {db.name}")
        
    except Exception as e:
        print(f"❌ Connection failed: {e}")
        print("\nPossible solutions:")
        print("Check that the configured MongoDB URI is valid and reachable.")

if __name__ == "__main__":
    asyncio.run(test_connection())
