#!/bin/sh -x

die() { return 1 || exit 1; }

if ! which curl >/dev/null 2>&1; then
	printf "1n574ll curl, 5700p1d!\n"
	die
fi

ZELDA="http://www.trinity.moe/zelda.wav"

if   which aplay >/dev/null 2>&1; then curl "$ZELDA" | aplay
elif ls /dev/dsp >/dev/null 2>&1; then curl "$ZELDA" >/dev/dsp
else
	printf "Unknown sound device. Sorry!\n"
	die
fi

return 0 || exit 0
