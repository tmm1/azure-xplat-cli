// This file has been autogenerated.

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2e3f79d6-a5a3-4952-837a-46e76b6ceb17/services/WebSpaces')
  .reply(200, "<WebSpaces xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>BLU</GeoLocation><GeoRegion>East US</GeoRegion><Name>eastuswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>2e3f79d6-a5a3-4952-837a-46e76b6ceb17</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>CH1</GeoLocation><GeoRegion>North Central US</GeoRegion><Name>northcentraluswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>2e3f79d6-a5a3-4952-837a-46e76b6ceb17</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>DB3</GeoLocation><GeoRegion>North Europe</GeoRegion><Name>northeuropewebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>2e3f79d6-a5a3-4952-837a-46e76b6ceb17</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>AM2</GeoLocation><GeoRegion>West Europe</GeoRegion><Name>westeuropewebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>2e3f79d6-a5a3-4952-837a-46e76b6ceb17</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>bay</GeoLocation><GeoRegion>West US</GeoRegion><Name>westuswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>2e3f79d6-a5a3-4952-837a-46e76b6ceb17</Subscription><WorkerSize i:nil=\"true\"/></WebSpace></WebSpaces>", { 'cache-control': 'private',
  'content-length': '2300',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.38 (rd_rdfe_stable.131218-1315) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '4f88fdd8c7a154918662f51dcb121952',
  date: 'Thu, 16 Jan 2014 01:22:26 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2e3f79d6-a5a3-4952-837a-46e76b6ceb17/services/WebSpaces/westuswebspace/sites?&propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername')
  .reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Site><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><Cers i:nil=\"true\"/><ComputeMode>Shared</ComputeMode><ContentAvailabilityState>Normal</ContentAvailabilityState><Csrs/><DeploymentId>mynewsite123</DeploymentId><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>mynewsite123.azurewebsites.net</a:string><a:string>mynewsite123.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IPBasedSslState>NotConfigured</IPBasedSslState><IpBasedSslResult i:nil=\"true\"/><Name>mynewsite123.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState><HostNameSslState><IPBasedSslState>NotConfigured</IPBasedSslState><IpBasedSslResult i:nil=\"true\"/><Name>mynewsite123.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>mynewsite123.azurewebsites.net</a:string></HostNames><LastModifiedTimeUtc>2014-01-16T00:58:05.313</LastModifiedTimeUtc><Name>mynewsite123</Name><Owner i:nil=\"true\"/><RepositorySiteName>mynewsite123</RepositorySiteName><RuntimeAvailabilityState>Normal</RuntimeAvailabilityState><SSLCertificates/><SelfLink>https://waws-prod-bay-003.api.azurewebsites.windows.net:454/20130801/websystems/websites/web/subscriptions/2e3f79d6-a5a3-4952-837a-46e76b6ceb17/webspaces/westuswebspace/sites/mynewsite123</SelfLink><ServerFarm i:nil=\"true\"/><SiteConfig i:nil=\"true\"/><SiteMode>Limited</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties><NameValuePair><Name>RepositoryUri</Name><Value>https://mynewsite123.scm.azurewebsites.net</Value></NameValuePair><NameValuePair><Name>PublishingUsername</Name><Value>$mynewsite123</Value></NameValuePair><NameValuePair><Name>PublishingPassword</Name><Value>phu5hgyrv7izjGC5S1wkkqpi0uFnQ3t1aGtRnrxWza2LfLGQbTWnl8sMuLbu</Value></NameValuePair></Properties></SiteProperties><State>Running</State><StorageRecoveryDefaultState>Running</StorageRecoveryDefaultState><UsageState>Normal</UsageState><WebSpace>westuswebspace</WebSpace></Site></Sites>", { 'cache-control': 'private',
  'content-length': '2517',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.38 (rd_rdfe_stable.131218-1315) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '1f2c686582415de8b284e69300d2ddba',
  date: 'Thu, 16 Jan 2014 01:22:28 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2e3f79d6-a5a3-4952-837a-46e76b6ceb17/services/WebSpaces/northeuropewebspace/sites?&propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername')
  .reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"/>", { 'cache-control': 'private',
  'content-length': '110',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.38 (rd_rdfe_stable.131218-1315) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '1bbb264d04235ddebaa308e8d988eb8e',
  date: 'Thu, 16 Jan 2014 01:22:27 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2e3f79d6-a5a3-4952-837a-46e76b6ceb17/services/WebSpaces/northcentraluswebspace/sites?&propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername')
  .reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"/>", { 'cache-control': 'private',
  'content-length': '110',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.38 (rd_rdfe_stable.131218-1315) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '0370a453d80b5250be71c9ce2f892afe',
  date: 'Thu, 16 Jan 2014 01:22:28 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2e3f79d6-a5a3-4952-837a-46e76b6ceb17/services/WebSpaces/eastuswebspace/sites?&propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername')
  .reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Site><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><Cers i:nil=\"true\"/><ComputeMode>Dedicated</ComputeMode><ContentAvailabilityState>Normal</ContentAvailabilityState><Csrs/><DeploymentId>slots1</DeploymentId><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>slots1.azurewebsites.net</a:string><a:string>slots1.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IPBasedSslState>NotConfigured</IPBasedSslState><IpBasedSslResult i:nil=\"true\"/><Name>slots1.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState><HostNameSslState><IPBasedSslState>NotConfigured</IPBasedSslState><IpBasedSslResult i:nil=\"true\"/><Name>slots1.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>slots1.azurewebsites.net</a:string></HostNames><LastModifiedTimeUtc>2014-01-16T01:21:55.763</LastModifiedTimeUtc><Name>slots1</Name><Owner i:nil=\"true\"/><RepositorySiteName>slots1</RepositorySiteName><RuntimeAvailabilityState>Normal</RuntimeAvailabilityState><SSLCertificates/><SelfLink>https://waws-prod-blu-001.api.azurewebsites.windows.net:454/20130801/websystems/websites/web/subscriptions/2e3f79d6-a5a3-4952-837a-46e76b6ceb17/webspaces/eastuswebspace/sites/slots1</SelfLink><ServerFarm>DefaultServerFarm</ServerFarm><SiteConfig i:nil=\"true\"/><SiteMode>Basic</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties><NameValuePair><Name>RepositoryUri</Name><Value>https://slots1.scm.azurewebsites.net</Value></NameValuePair><NameValuePair><Name>PublishingUsername</Name><Value>$slots1</Value></NameValuePair><NameValuePair><Name>PublishingPassword</Name><Value>WpdAFK22msg2ybP7fEyEZbvejpyypx2hZZyjH35iqXxaWgefpd1rEzm3gxG1</Value></NameValuePair></Properties></SiteProperties><State>Running</State><StorageRecoveryDefaultState>Running</StorageRecoveryDefaultState><UsageState>Normal</UsageState><WebSpace>eastuswebspace</WebSpace></Site></Sites>", { 'cache-control': 'private',
  'content-length': '2468',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.38 (rd_rdfe_stable.131218-1315) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '5bf385f67a305068b8caeed6e0d8901a',
  date: 'Thu, 16 Jan 2014 01:22:28 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2e3f79d6-a5a3-4952-837a-46e76b6ceb17/services/WebSpaces/westeuropewebspace/sites?&propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername')
  .reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"/>", { 'cache-control': 'private',
  'content-length': '110',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.38 (rd_rdfe_stable.131218-1315) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '47b6defb662b572b9aedf7b97edb0e17',
  date: 'Thu, 16 Jan 2014 01:22:29 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2e3f79d6-a5a3-4952-837a-46e76b6ceb17/services/WebSpaces?properties=georegions')
  .reply(200, "<GeoRegions xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><GeoRegion><Description i:nil=\"true\"/><Name>West US</Name><SortOrder>0</SortOrder></GeoRegion><GeoRegion><Description i:nil=\"true\"/><Name>North Europe</Name><SortOrder>1</SortOrder></GeoRegion><GeoRegion><Description i:nil=\"true\"/><Name>West Europe</Name><SortOrder>2</SortOrder></GeoRegion><GeoRegion><Description i:nil=\"true\"/><Name>North Central US</Name><SortOrder>3</SortOrder></GeoRegion><GeoRegion><Description i:nil=\"true\"/><Name>East Asia</Name><SortOrder>4</SortOrder></GeoRegion><GeoRegion><Description i:nil=\"true\"/><Name>East US</Name><SortOrder>5</SortOrder></GeoRegion></GeoRegions>", { 'cache-control': 'private',
  'content-length': '711',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.38 (rd_rdfe_stable.131218-1315) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '44e62e4adaed5ce69e4940276ee40d1f',
  date: 'Thu, 16 Jan 2014 01:22:31 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2e3f79d6-a5a3-4952-837a-46e76b6ceb17/services/WebSpaces')
  .reply(200, "<WebSpaces xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>BLU</GeoLocation><GeoRegion>East US</GeoRegion><Name>eastuswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>2e3f79d6-a5a3-4952-837a-46e76b6ceb17</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>CH1</GeoLocation><GeoRegion>North Central US</GeoRegion><Name>northcentraluswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>2e3f79d6-a5a3-4952-837a-46e76b6ceb17</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>DB3</GeoLocation><GeoRegion>North Europe</GeoRegion><Name>northeuropewebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>2e3f79d6-a5a3-4952-837a-46e76b6ceb17</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>AM2</GeoLocation><GeoRegion>West Europe</GeoRegion><Name>westeuropewebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>2e3f79d6-a5a3-4952-837a-46e76b6ceb17</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>bay</GeoLocation><GeoRegion>West US</GeoRegion><Name>westuswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>2e3f79d6-a5a3-4952-837a-46e76b6ceb17</Subscription><WorkerSize i:nil=\"true\"/></WebSpace></WebSpaces>", { 'cache-control': 'private',
  'content-length': '2300',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.38 (rd_rdfe_stable.131218-1315) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'ae3400a76b7f5689898cc768a73de3bc',
  date: 'Thu, 16 Jan 2014 01:22:33 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2e3f79d6-a5a3-4952-837a-46e76b6ceb17/services/WebSpaces/eastuswebspace/ServerFarms/DefaultServerFarm')
  .reply(200, "<ServerFarm xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><CurrentNumberOfWorkers>1</CurrentNumberOfWorkers><CurrentWorkerSize>Small</CurrentWorkerSize><Name>DefaultServerFarm</Name><NumberOfWorkers>1</NumberOfWorkers><Status>Ready</Status><WorkerSize>Small</WorkerSize></ServerFarm>", { 'cache-control': 'private',
  'content-length': '339',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.38 (rd_rdfe_stable.131218-1315) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'a76e71b4cc2d5beea57f0e781c7aa7b9',
  date: 'Thu, 16 Jan 2014 01:22:35 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/2e3f79d6-a5a3-4952-837a-46e76b6ceb17/services/WebSpaces/eastuswebspace/sites/slots1', '*')
  .reply(200, "<Site xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><Cers i:nil=\"true\"/><ComputeMode>Dedicated</ComputeMode><ContentAvailabilityState>Normal</ContentAvailabilityState><Csrs/><DeploymentId>slots1</DeploymentId><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>slots1.azurewebsites.net</a:string><a:string>slots1.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IPBasedSslState>NotConfigured</IPBasedSslState><IpBasedSslResult i:nil=\"true\"/><Name>slots1.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState><HostNameSslState><IPBasedSslState>NotConfigured</IPBasedSslState><IpBasedSslResult i:nil=\"true\"/><Name>slots1.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>slots1.azurewebsites.net</a:string></HostNames><LastModifiedTimeUtc>2014-01-16T01:21:55.763</LastModifiedTimeUtc><Name>slots1</Name><Owner i:nil=\"true\"/><RepositorySiteName>slots1</RepositorySiteName><RuntimeAvailabilityState>Normal</RuntimeAvailabilityState><SSLCertificates/><SelfLink>https://waws-prod-blu-001.api.azurewebsites.windows.net:454/20130801/websystems/websites/web/subscriptions/2e3f79d6-a5a3-4952-837a-46e76b6ceb17/webspaces/eastuswebspace/sites/slots1</SelfLink><ServerFarm>DefaultServerFarm</ServerFarm><SiteConfig i:nil=\"true\"/><SiteMode>Basic</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties/></SiteProperties><State>Running</State><StorageRecoveryDefaultState>Running</StorageRecoveryDefaultState><UsageState>Normal</UsageState><WebSpace>eastuswebspace</WebSpace></Site>", { 'cache-control': 'private',
  'content-length': '2112',
  'content-type': 'application/xml; charset=utf-8',
  etag: '"1CF1259582AE830"',
  server: '1.0.6198.38 (rd_rdfe_stable.131218-1315) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'f5aceae9b9435e3bb11138e5228b8b16',
  date: 'Thu, 16 Jan 2014 01:22:37 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2e3f79d6-a5a3-4952-837a-46e76b6ceb17/services/WebSpaces/eastuswebspace/sites?&propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername')
  .reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Site><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><Cers i:nil=\"true\"/><ComputeMode>Dedicated</ComputeMode><ContentAvailabilityState>Normal</ContentAvailabilityState><Csrs/><DeploymentId>slots1</DeploymentId><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>slots1.azurewebsites.net</a:string><a:string>slots1.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IPBasedSslState>NotConfigured</IPBasedSslState><IpBasedSslResult i:nil=\"true\"/><Name>slots1.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState><HostNameSslState><IPBasedSslState>NotConfigured</IPBasedSslState><IpBasedSslResult i:nil=\"true\"/><Name>slots1.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>slots1.azurewebsites.net</a:string></HostNames><LastModifiedTimeUtc>2014-01-16T01:21:55.763</LastModifiedTimeUtc><Name>slots1</Name><Owner i:nil=\"true\"/><RepositorySiteName>slots1</RepositorySiteName><RuntimeAvailabilityState>Normal</RuntimeAvailabilityState><SSLCertificates/><SelfLink>https://waws-prod-blu-001.api.azurewebsites.windows.net:454/20130801/websystems/websites/web/subscriptions/2e3f79d6-a5a3-4952-837a-46e76b6ceb17/webspaces/eastuswebspace/sites/slots1</SelfLink><ServerFarm>DefaultServerFarm</ServerFarm><SiteConfig i:nil=\"true\"/><SiteMode>Basic</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties><NameValuePair><Name>RepositoryUri</Name><Value>https://slots1.scm.azurewebsites.net</Value></NameValuePair><NameValuePair><Name>PublishingUsername</Name><Value>$slots1</Value></NameValuePair><NameValuePair><Name>PublishingPassword</Name><Value>WpdAFK22msg2ybP7fEyEZbvejpyypx2hZZyjH35iqXxaWgefpd1rEzm3gxG1</Value></NameValuePair></Properties></SiteProperties><State>Running</State><StorageRecoveryDefaultState>Running</StorageRecoveryDefaultState><UsageState>Normal</UsageState><WebSpace>eastuswebspace</WebSpace></Site></Sites>", { 'cache-control': 'private',
  'content-length': '2468',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.38 (rd_rdfe_stable.131218-1315) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '4397ded6931050bda8e938a8860039f2',
  date: 'Thu, 16 Jan 2014 01:22:40 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2e3f79d6-a5a3-4952-837a-46e76b6ceb17/services/WebSpaces/westuswebspace/sites?&propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername')
  .reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Site><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><Cers i:nil=\"true\"/><ComputeMode>Shared</ComputeMode><ContentAvailabilityState>Normal</ContentAvailabilityState><Csrs/><DeploymentId>mynewsite123</DeploymentId><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>mynewsite123.azurewebsites.net</a:string><a:string>mynewsite123.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IPBasedSslState>NotConfigured</IPBasedSslState><IpBasedSslResult i:nil=\"true\"/><Name>mynewsite123.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState><HostNameSslState><IPBasedSslState>NotConfigured</IPBasedSslState><IpBasedSslResult i:nil=\"true\"/><Name>mynewsite123.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>mynewsite123.azurewebsites.net</a:string></HostNames><LastModifiedTimeUtc>2014-01-16T00:58:05.313</LastModifiedTimeUtc><Name>mynewsite123</Name><Owner i:nil=\"true\"/><RepositorySiteName>mynewsite123</RepositorySiteName><RuntimeAvailabilityState>Normal</RuntimeAvailabilityState><SSLCertificates/><SelfLink>https://waws-prod-bay-003.api.azurewebsites.windows.net:454/20130801/websystems/websites/web/subscriptions/2e3f79d6-a5a3-4952-837a-46e76b6ceb17/webspaces/westuswebspace/sites/mynewsite123</SelfLink><ServerFarm i:nil=\"true\"/><SiteConfig i:nil=\"true\"/><SiteMode>Limited</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties><NameValuePair><Name>RepositoryUri</Name><Value>https://mynewsite123.scm.azurewebsites.net</Value></NameValuePair><NameValuePair><Name>PublishingUsername</Name><Value>$mynewsite123</Value></NameValuePair><NameValuePair><Name>PublishingPassword</Name><Value>phu5hgyrv7izjGC5S1wkkqpi0uFnQ3t1aGtRnrxWza2LfLGQbTWnl8sMuLbu</Value></NameValuePair></Properties></SiteProperties><State>Running</State><StorageRecoveryDefaultState>Running</StorageRecoveryDefaultState><UsageState>Normal</UsageState><WebSpace>westuswebspace</WebSpace></Site></Sites>", { 'cache-control': 'private',
  'content-length': '2517',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.38 (rd_rdfe_stable.131218-1315) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'a2d03be56569555293731d7e6e264dd7',
  date: 'Thu, 16 Jan 2014 01:22:40 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2e3f79d6-a5a3-4952-837a-46e76b6ceb17/services/WebSpaces/northcentraluswebspace/sites?&propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername')
  .reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"/>", { 'cache-control': 'private',
  'content-length': '110',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.38 (rd_rdfe_stable.131218-1315) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '97dfd765ee565e51b3632304f2192cbc',
  date: 'Thu, 16 Jan 2014 01:22:40 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2e3f79d6-a5a3-4952-837a-46e76b6ceb17/services/WebSpaces/westeuropewebspace/sites?&propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername')
  .reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"/>", { 'cache-control': 'private',
  'content-length': '110',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.38 (rd_rdfe_stable.131218-1315) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '8170008a54f55fe2b338eef9f4e5598e',
  date: 'Thu, 16 Jan 2014 01:22:39 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2e3f79d6-a5a3-4952-837a-46e76b6ceb17/services/WebSpaces/northeuropewebspace/sites?&propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername')
  .reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"/>", { 'cache-control': 'private',
  'content-length': '110',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.38 (rd_rdfe_stable.131218-1315) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'a8f84f7d25e55b1b8345f5661e010a8e',
  date: 'Thu, 16 Jan 2014 01:22:40 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2e3f79d6-a5a3-4952-837a-46e76b6ceb17/services/WebSpaces?properties=georegions')
  .reply(200, "<GeoRegions xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><GeoRegion><Description i:nil=\"true\"/><Name>West US</Name><SortOrder>0</SortOrder></GeoRegion><GeoRegion><Description i:nil=\"true\"/><Name>North Europe</Name><SortOrder>1</SortOrder></GeoRegion><GeoRegion><Description i:nil=\"true\"/><Name>West Europe</Name><SortOrder>2</SortOrder></GeoRegion><GeoRegion><Description i:nil=\"true\"/><Name>North Central US</Name><SortOrder>3</SortOrder></GeoRegion><GeoRegion><Description i:nil=\"true\"/><Name>East Asia</Name><SortOrder>4</SortOrder></GeoRegion><GeoRegion><Description i:nil=\"true\"/><Name>East US</Name><SortOrder>5</SortOrder></GeoRegion></GeoRegions>", { 'cache-control': 'private',
  'content-length': '711',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.38 (rd_rdfe_stable.131218-1315) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'c29b2596dc4450a4b3186e7223bcfbac',
  date: 'Thu, 16 Jan 2014 01:22:42 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2e3f79d6-a5a3-4952-837a-46e76b6ceb17/services/WebSpaces')
  .reply(200, "<WebSpaces xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>BLU</GeoLocation><GeoRegion>East US</GeoRegion><Name>eastuswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>2e3f79d6-a5a3-4952-837a-46e76b6ceb17</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>CH1</GeoLocation><GeoRegion>North Central US</GeoRegion><Name>northcentraluswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>2e3f79d6-a5a3-4952-837a-46e76b6ceb17</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>DB3</GeoLocation><GeoRegion>North Europe</GeoRegion><Name>northeuropewebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>2e3f79d6-a5a3-4952-837a-46e76b6ceb17</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>AM2</GeoLocation><GeoRegion>West Europe</GeoRegion><Name>westeuropewebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>2e3f79d6-a5a3-4952-837a-46e76b6ceb17</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>bay</GeoLocation><GeoRegion>West US</GeoRegion><Name>westuswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>2e3f79d6-a5a3-4952-837a-46e76b6ceb17</Subscription><WorkerSize i:nil=\"true\"/></WebSpace></WebSpaces>", { 'cache-control': 'private',
  'content-length': '2300',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.38 (rd_rdfe_stable.131218-1315) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '3c6ed47e56d55e4eb3d8280917b47c7f',
  date: 'Thu, 16 Jan 2014 01:22:45 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/2e3f79d6-a5a3-4952-837a-46e76b6ceb17/services/WebSpaces/eastuswebspace/sites', '*')</Name><WebSpace>eastuswebspace</WebSpace></Site>")
  .reply(200, "<Site xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><Cers i:nil=\"true\"/><ComputeMode>Dedicated</ComputeMode><ContentAvailabilityState>Normal</ContentAvailabilityState><Csrs/><DeploymentId>slots1__f925</DeploymentId><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>slots1-staging.azurewebsites.net</a:string><a:string>slots1-staging.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IPBasedSslState>NotConfigured</IPBasedSslState><IpBasedSslResult i:nil=\"true\"/><Name>slots1-staging.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState><HostNameSslState><IPBasedSslState>NotConfigured</IPBasedSslState><IpBasedSslResult i:nil=\"true\"/><Name>slots1-staging.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>slots1-staging.azurewebsites.net</a:string></HostNames><LastModifiedTimeUtc>2014-01-16T01:22:48.637</LastModifiedTimeUtc><Name>slots1(staging)</Name><Owner i:nil=\"true\"/><RepositorySiteName>slots1</RepositorySiteName><RuntimeAvailabilityState>Normal</RuntimeAvailabilityState><SSLCertificates/><SelfLink>https://waws-prod-blu-001.api.azurewebsites.windows.net:454/20130801/websystems/websites/web/subscriptions/2e3f79d6-a5a3-4952-837a-46e76b6ceb17/webspaces/eastuswebspace/sites/slots1</SelfLink><ServerFarm>DefaultServerFarm</ServerFarm><SiteConfig i:nil=\"true\"/><SiteMode>Basic</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties/></SiteProperties><State>Running</State><StorageRecoveryDefaultState>Running</StorageRecoveryDefaultState><UsageState>Normal</UsageState><WebSpace>eastuswebspace</WebSpace></Site>", { 'cache-control': 'private',
  'content-length': '2167',
  'content-type': 'application/xml; charset=utf-8',
  etag: '"1CF1259582AE830"',
  server: '1.0.6198.38 (rd_rdfe_stable.131218-1315) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'aad39f7d335050ae9d863f07bee74da9',
  date: 'Thu, 16 Jan 2014 01:22:51 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .delete('/2e3f79d6-a5a3-4952-837a-46e76b6ceb17/services/WebSpaces/eastuswebspace/sites/slots1?&deleteEmptyServerFarm=true&deleteMetrics=true&deleteAllSlots=true')
  .reply(200, "", { 'cache-control': 'private',
  'transfer-encoding': 'chunked',
  server: '1.0.6198.38 (rd_rdfe_stable.131218-1315) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '147018fac4e05df5b1c587d4f101a464',
  date: 'Thu, 16 Jan 2014 01:23:00 GMT' });
 return result; }]