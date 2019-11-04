#!/bin/bash

echo Enter pattern category by number:
echo 1 - Creational
echo 2 - Structural
echo 3 - Test

read PATTERN_CATEGORY_NUM

case $PATTERN_CATEGORY_NUM in
  1)
    PATTERN_DIR="CreationalPatterns"
    ;;

  2)
    PATTERN_DIR="StructuralPatterns"
    ;;

  3)
    PATTERN_DIR="BehavioralPatterns"
    ;;
esac

echo Enter pattern name
read PATTERN_NAME

mkdir src/$PATTERN_DIR
touch src/$PATTERN_DIR/$PATTERN_NAME.md
touch src/$PATTERN_DIR/$PATTERN_NAME.ts
touch src/$PATTERN_DIR/$PATTERN_NAME.test.ts
