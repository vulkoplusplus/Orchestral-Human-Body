import random
import numpy as np


def map_calories_to_freq(calories):
    # Example: Mapping 60-180 bpm to 220-880 Hz (A3 to A5)
    return 220 + (calories - 60) * (660 / 120)


def map_intensity_to_amp(intensity):
    # Assuming intensity is scaled 0-10, mapping to amplitude 0-1
    return intensity / 150


def map_step_total_to_duration(
    step_total, max_steps=random.randrange(3000, 10000), tempo=120
):
    # Mapping the step total to note duration in ticks (assuming 480 ticks per beat)
    beats_per_minute = np.interp(step_total, [0, max_steps], [60, 180])
    ticks_per_beat = 480
    # Convert tempo to duration in ticks
    duration = int((60 / beats_per_minute) * ticks_per_beat)
    return duration / 10
