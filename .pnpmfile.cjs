const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

module.exports = {
  hooks: {
    afterAllResolved(lockfile, context) {
      console.log('🔔 PNPMFILE afterAllResolved HOOK RUNNING');

      // Check if manypkg is available (node_modules exists with the binary)
      const manypkgBin = path.join(__dirname, 'node_modules', '.bin', 'manypkg');
      const manypkgExists = fs.existsSync(manypkgBin);

      if (!manypkgExists) {
        console.log(
          '⏭️  Skipping manypkg check (fresh install - manypkg not yet available)'
        );
        return lockfile;
      }

      // Try running manypkg check
      try {
        execSync('pnpm manypkg', { stdio: 'inherit' });
      } catch (error) {
        console.error('manypkg check failed');
        process.exit(1);
      }

      return lockfile;
    },
  },
};

