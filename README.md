# KSPCRadioAndroid
Android mobile app for KSPC Radio Station.

# Set up environment
1. Install vagrant and all dependencies. https://www.vagrantup.com/downloads.html
2. Download `Vagrantfile` and `bootstrap.sh` from https://drive.google.com/drive/u/1/folders/0B6ghgTT1V3agNUUxTk52TmhsREE.
3. Put these in a folder.
4. Place this repository inside this folder.
4. In terminal, `cd` into this folder.
5. Type in `vagrant up`. This will set up the environment, donwloading and installing all necessary software.
6. Do `vagrant ssh`, then `exit`, then `vagrant reload`, then `vagrant ssh` again to start.

# Use
1. From now on, anytime you want to use the environment just type in `vagrant up` followed by `vagrant ssh` in this same folder.
2. To run the app on a physical Android device attached by usb, just do `cd KSPCRadioAndroid`, then `ionic run android`.
3. You may need to install the Oracle Virtualbox Extension Pack for this to work. https://www.virtualbox.org/wiki/Downloads
