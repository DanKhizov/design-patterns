#!/bin/bash
# Ask the user for their name
echo Enter pattern name
read patternName

mkdir src/$patternName
touch src/$patternName/$patternName.md
touch src/$patternName/$patternName.ts
touch src/$patternName/$patternName.test.ts
