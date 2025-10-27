/**
<<<<<<< HEAD
<<<<<<< HEAD
 * System Monitoring Script - Production
 * Monitors application health and performance
=======
 * System Monitoring Script
 * Supports both production and development modes
>>>>>>> be5811f8eb18d8e5064ec0b92e12db478764a388
 */

const ENV = process.env.NODE_ENV || 'production';

const monitorConfig = {
  production: {
    interval: 60000,
    alertThreshold: 80,
    debugMode: false
  },
  development: {
    interval: 5000,
    alertThreshold: 90,
    debugMode: true,
    verboseLogging: true
  }
};

const config = monitorConfig[ENV];

console.log('=================================');
console.log(`DevOps Simulator - Monitor`);
console.log(`Environment: ${ENV}`);
console.log(`Debug: ${config.debugMode ? 'ENABLED' : 'DISABLED'}`);
console.log('=================================');

function checkSystemHealth() {
  const timestamp = new Date().toISOString();
  
  if (config.debugMode) {
    console.log(`\n[${timestamp}] === DETAILED HEALTH CHECK ===`);
  } else {
    console.log(`[${timestamp}] Checking system health...`);
  }
  
  console.log('✓ CPU usage: Normal');
  console.log('✓ Memory usage: Normal');
  console.log('✓ Disk space: Adequate');
  
  if (config.debugMode) {
    console.log('✓ Hot reload: Active');
    console.log('✓ Debug port: 9229');
  }
  
  console.log('System Status: HEALTHY');
=======
 * System Monitoring Script - Development
 * Enhanced monitoring with debug features
 */

const monitorConfig = {
  interval: 5000, // 5 seconds (faster for development)
  alertThreshold: 90,
  metricsEndpoint: 'http://localhost:3000/metrics',
  debugMode: true,
  verboseLogging: true
};

console.log('=================================');
console.log('DevOps Simulator - Monitor v2.0-beta');
console.log('Development Mode: ENABLED');
console.log('=================================');

function checkSystemHealth() {
  const timestamp = new Date().toISOString();
  
  if (monitorConfig.debugMode) {
    console.log(`\n[${timestamp}] === DETAILED HEALTH CHECK ===`);
  } else {
    console.log(`[${timestamp}] Checking system health...`);
  }
  
  // Check CPU usage
  const cpuUsage = Math.random() * 100;
  console.log(`✓ CPU usage: ${cpuUsage.toFixed(2)}%`);
  
  // Check Memory
  const memUsage = Math.random() * 100;
  console.log(`✓ Memory usage: ${memUsage.toFixed(2)}%`);
  
  // Check Disk
  const diskUsage = Math.random() * 100;
  console.log(`✓ Disk space: ${diskUsage.toFixed(2)}% used`);
  
  // Development-specific checks
  if (monitorConfig.debugMode) {
    console.log('✓ Hot reload: Active');
    console.log('✓ Debug port: 9229');
    console.log('✓ Source maps: Enabled');
  }
  
  // Status determination
  const maxUsage = Math.max(cpuUsage, memUsage, diskUsage);
  if (maxUsage > monitorConfig.alertThreshold) {
    console.log('⚠️  System Status: WARNING - High resource usage');
  } else {
    console.log('✅ System Status: HEALTHY');
  }
  
  if (monitorConfig.verboseLogging) {
    console.log(`Next check in ${monitorConfig.interval}ms`);
  }
>>>>>>> dev
}

<<<<<<< HEAD
// Start monitoring
console.log(`Monitoring every ${monitorConfig.interval}ms`);
<<<<<<< HEAD
setInterval(checkSystemHealth, monitorConfig.interval);

// Run first check immediately
checkSystemHealth();
=======
console.log('Debug features enabled');
setInterval(checkSystemHealth, monitorConfig.interval);

// Run first check immediately
checkSystemHealth();

// Development-specific: Log memory usage
if (monitorConfig.debugMode) {
  setInterval(() => {
    const memUsage = process.memoryUsage();
    console.log('\n--- Memory Usage ---');
    console.log(`RSS: ${(memUsage.rss / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Heap Used: ${(memUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`);
  }, 30000);
}
>>>>>>> dev
=======
console.log(`Monitoring every ${config.interval}ms`);
setInterval(checkSystemHealth, config.interval);
checkSystemHealth();
>>>>>>> be5811f8eb18d8e5064ec0b92e12db478764a388
