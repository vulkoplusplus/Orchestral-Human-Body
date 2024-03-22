m = Server(\myServer3, NetAddr("127.0.0.1", 57211));
m.boot; //start the server

SynthDef("sine", { |freq = 440, dur = 5, amp = 0.5|
var env, osc;
env = EnvGen.kr(Env.perc(0.01, dur, amp, -4), doneAction: 2);
osc = SinOsc.ar(freq, 0, env); // Sine wave oscillator modulated by envelope
Out.ar(0, osc); // Output to audio bus 0
}).add;
x = Synth("sine", ["freq": 440, "dur": 50, "amp": 0.5]);
x = Synth("sine", ["freq": 440, "amp": 0.5]);

SynthDef("advanced_synth", { |freq = 440, amp = 0.5, filter_freq = 500|
var sound, env;
sound = SinOsc.ar(freq) _ amp; // Basic oscillator
sound = LPF.ar(sound, filter_freq); // Low-pass filter applied
env = EnvGen.kr(Env.perc, doneAction: 2); // Envelope generator
Out.ar(0, sound _ env);
}).add;

m.prepareForRecord;
m.record;

m.stopRecording;
m.quit;
