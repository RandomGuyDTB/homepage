#!/bin/sh -x
set -e

if ! which curl >/dev/null 2>&1; then
	printf "1n574ll curl, 5700p1d!\n"
	exit 1
fi

ZELDA="http://www.trinity.moe/zelda.wav"

if   which aplay >/dev/null 2>&1; then curl "$ZELDA" | aplay
elif ls /dev/dsp >/dev/null 2>&1; then curl "$ZELDA" >/dev/dsp
else
	printf "Unknown sound device. Sorry!\n"
	exit 1
fi

exit 0
