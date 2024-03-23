def map_calories_to_freq(calories):
    return 220 + (calories - 60) * (660 / 120)  # Mapping to a musical frequency range


def map_intensity_to_amp(intensity):
    return max(
        min(intensity / 10, 1), 0.1
    )  # Ensuring amplitude is within a sensible range


def map_step_total_to_duration(step_total, max_steps, tempo=120):
    # Mapping the step total to note duration in ticks (assuming 480 ticks per beat)
    beats_per_minute = np.interp(step_total, [0, max_steps], [60, 180])
    ticks_per_beat = 480
    # Convert tempo to duration in ticks
    duration = int((60 / beats_per_minute) * ticks_per_beat)
    return duration / 10


# if __name__ == "__main__":
#     max_steps = df["Step Total"].max()  # Get max step count for scaling duration
#     for index, row in df.iterrows():
#         freq = map_calories_to_freq(row["Calories"])
#         dur = map_step_total_to_duration(
#             row["Step Total"], max_steps=max_steps
#         )  # Pass max_steps as argument
#         amp = map_intensity_to_amp(row["Total Intensity"])
#         play_sound(freq, dur, amp)
#         time.sleep(dur / 1000)  # Sleep to match the note's duration
