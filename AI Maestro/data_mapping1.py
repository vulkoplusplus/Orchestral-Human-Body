# Utility function to map a value from one range to another
def map_value(value, min_input, max_input, min_output, max_output):
    return (value - min_input) * (max_output - min_output) / (
        max_input - min_input
    ) + min_output


# Mapping functions
def map_calories_to_freq(calories):
    # Mapping calories to a musical scale (e.g., C major)
    notes = [
        261.63,
        293.66,
        329.63,
        349.23,
        392.00,
        440.00,
        493.88,
    ]  # C4 to B4 frequencies
    index = int(map_value(calories, 50, 300, 0, len(notes) - 1))
    return notes[index]


def map_intensity_to_amp(intensity):
    return map_value(intensity, 0, 10, 0.1, 1.0)


def map_step_total_to_duration(step_total):
    return map_value(step_total, 0, 10000, 0.1, 1.5)  # Duration in seconds


# if __name__ == "__main__":
#     for index, row in df.iterrows():
#         freq = map_calories_to_freq(row["Calories"])
#         dur = map_step_total_to_duration(row["Step Total"])
#         amp = map_intensity_to_amp(row["Total Intensity"])
#         print("Data", freq, dur, amp)
#         play_sound(freq, dur, amp)
#         time.sleep(dur)  # Wait based on the duration of the note
