#!/bin/bash

# Welcome message
echo "🔥🔥🔥Beginning build!! 🔥🔥🔥"

# Verify changelog update
firstline=$(head -n 1 source/changelog.md)
read -a splitfirstline <<< "$firstline"
version=${splitfirstline[1]}

echo "Building version: ${version}"   


# User confirmation
echo "Please confirm you have updated changelog.md with version ${version} (1 to continue, 0 to exit): "
read versioncontinue

# Conditional execution based on user input
if [[ $versioncontinue -eq 1 ]]; then
  echo "OK"

  # Loop through source directory files
  for filename in source/*; do
    if [[ "$filename" == "source/secretinfo.md" ]]; then
      echo "Skipping secretinfo.md..."
    else
      echo "Copying $filename to build directory..."
      cp "$filename" build/
    fi
  done

  # List files in build directory
  cd build
  echo "Files in build directory (version ${version}):"
  ls
  cd ..

else
  echo "Please come back when you are ready."
fi

