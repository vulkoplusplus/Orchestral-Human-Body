import time
from data_processor import read_data
from data_mapping import map_calories_to_freq
from data_mapping import map_step_total_to_duration
from data_mapping import map_intensity_to_amp
from sonification import play_sound


if __name__ == "__main__":

    df = read_data("./fitbit_sample.csv")
    # Iterate through each row in the DataFrame
    for index, row in df.iterrows():
        # print(row)
        # Map the DataFrame values to musical parameters for the current row
        freq = map_calories_to_freq(row["Calories"])
        dur = map_step_total_to_duration(row["Step Total"])
        amp = map_intensity_to_amp(row["Total Intensity"])

        dur += dur + 0.3
        amp += amp + 0.3

        # Optionally, use other columns to influence duration or other musical aspects
        print("data", freq, dur, amp)
        # Play the sound for the current row
        play_sound(freq, dur, amp)
        time.sleep(0.6)  # Wait for the sound to play, match the duration
