import pandas as pd


def read_data(file_path):
    """
    Reads activity data from a CSV file and renames columns to match the desired variables.

    :param file_path: Path to the CSV file.
    :return: Pandas DataFrame with the activity data, with updated column names.
    """
    # Define the column name mapping
    column_rename_map = {
        "Id": "Id",
        "ActivityHour": "Timestamp",
        "Calories": "Calories",
        "TotalIntensity": "Total Intensity",
        "AverageIntensity": "Average Intensity",
        "StepTotal": "Step Total",
    }

    # Read the data from the CSV file
    data = pd.read_csv(file_path, delimiter=";")

    # Rename the columns
    data.rename(columns=column_rename_map, inplace=True)

    # Convert 'Timestamp' column to datetime objects
    data["Timestamp"] = pd.to_datetime(data["Timestamp"], format="%m/%d/%Y %I:%M:%S %p")

    return data
