# Setup

## Alias commands from your terminal (recommended)
Save time (in the long run) by setting up a script to run the app for you
1. `cd app`
2. `npm i`
3. In the scripts directory, edit the relevant script for your OS (mac/linux/wsl) and change line 8 to the path to the directory where you cloned this repo
4. Add the following to your **.bashrc** or equivelant config file that loads on shell startup.  You will need to make a few changes first:
- **<CHANGE THIS 1>** replace with the path to the directory where you cloned this repo
- **<CHANGE THIS 2>** replace with mac/linux/wsl depending on your OS
<pre>
<code>
chmod +x ~/<strong>&lt;CHANGE THIS 1&gt;</strong>/open-multiple-repos/scripts/<strong>&lt;CHANGE THIS 2&gt;</strong>-openrepos.sh
alias openrepos='source ~/<strong>&lt;CHANGE THIS 1&gt;</strong>/open-multiple-repos/scripts/<strong>&lt;CHANGE THIS 2&gt;</strong>-openrepos.sh'
chmod +x ~/<strong>&lt;CHANGE THIS 1&gt;</strong>/open-multiple-repos/scripts/stopopenrepos.sh
alias stopopenrepos='source ~/<strong>&lt;CHANGE THIS 1&gt;</strong>/open-multiple-repos/scripts/stopopenrepos.sh'
</code>
</pre>

5. You can now use the following commands to start and stop the app from your terminal (you may need to restart your terminal first):
- `openrepos` to start the app
- `stopopenrepos` to stop the app (note, you will need to this command from the same directory as you used the openrepos command as it saves the PID of the app to a file in that directory)


## From app
1. `cd app`
2. `npm i`
3. `npm run dev`
4. open **localhost:5137** in browser

## From CLI.js
1. `npm i`
2. follow comment instructions in **CLI.js**.
3. `node CLI.js`

## To do
- Automate the process of installation, modifying scripts, and adding aliases.
- Add support for windows.
- Make `stopopenrepos` work from any directory.
- Don't have openrepos.pid clutter.