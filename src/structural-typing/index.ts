/*
Structural typing follows a simple idea:

✅ TypeScript compares the structure, not the type name.
✅ If a value has all the required properties, it is compatible.
✅ Having extra properties is generally allowed (except during the special check for object literals).
✅ Interfaces, types, functions, and even classes (with public members) follow this behavior.
*/