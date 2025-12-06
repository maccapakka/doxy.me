const { execSync } = require('child_process');

module.exports = {
  hooks: {
    afterAllResolved(lockfile, context) {
      console.log('🔔 PNPMFILE afterAllResolved HOOK RUNNING');
      
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

