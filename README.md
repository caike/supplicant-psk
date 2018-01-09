# Supplicant PSK

CLI program for generating a hash from plain text password for _wpa_supplicant.conf_. This is useful if you don't have access to a Linux machine and therefore can't use the `wpa_passphrase` command.

## Install

`npm install -g supplicant-psk`

## Running

Run:

`$ supplicant-psk [YOUR-SSID] [PLAIN-TEXT-PASSWORD]`

The program should output a hash which you can then use on the _wpa_supplicant.conf_ file like so:

```
network={
  ssid="YOUR-SSID"
  psk=[insert-hash-here]
}
```
## Usage with Raspberry Pi

When setting up a Raspberry Pi 3 with Raspbian Strech, use the following _wpa_supplicant.conf_ file.

```
country=US
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
network={
  ssid="YOUR-SSID"
  psk=[insert-hash-here]
}
```

Place it on the root directory of the SD card right after burning the ISO. This will allow the device to automatically connect to the wi-fi on first boot.
