import os

for i in range(1, 111):
    day_directory = f"WebDev/day{i}"

    # Create the day directory if it doesn't exist
    if not os.path.exists(day_directory):
        os.mkdir(day_directory)

    # List of file names to be created
    file_names = ['index.html', 'style.css', 'script.js']

    # Create three files within the day directory
    for file_name in file_names:
        file_path = os.path.join(day_directory, file_name)
        with open(file_path, 'w') as file:
            file.write(f"This is {file_name} in {day_directory}")

# for deleting  similar files from all folders

for i in range(1, 100):
    day_directory = f"WebDev/day{i+1}"

    # Check if the "day" directory exists
    if os.path.exists(day_directory):
        # List of file names to be deleted
        file_names = ['file1.txt', 'file2.txt', 'file3.txt']

        # Delete the specified files within the day directory
        for file_name in file_names:
            file_path = os.path.join(day_directory, file_name)
            if os.path.exists(file_path):
                os.remove(file_path)
                print(f"Deleted {file_name} from {day_directory}")
            else:
                print(f"{file_name} does not exist in {day_directory}")
    else:
        print(f"Directory {day_directory} does not exist")