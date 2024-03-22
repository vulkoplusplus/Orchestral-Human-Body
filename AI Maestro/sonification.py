from pythonosc.udp_client import SimpleUDPClient


def play_sound(freq, dur=0.5, amp=0.0):
    client = SimpleUDPClient("127.0.0.1", 57211)  # SuperCollider's listening port
    # Send OSC message to create a new synth with specified parameters
    # client.send_message(
    #     "/s_new", ["sine", -1, 1, 1, "freq", freq, "dur", dur, "amp", amp]
    # )
    client.send_message(
        "/s_new",
        [
            "advanced_synth",
            -1,
            1,
            1,
            "freq",
            freq,
            "dur",
            dur,
            "amp",
            amp,
            "filter_freq",
            500,
            "mod_index",
            2.0,
        ],
    )
