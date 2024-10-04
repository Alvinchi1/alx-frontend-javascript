export default functionm loadBalancer(chinaDownload, USDownload) {
	return Promise.race([chinaDownload, USDownload]);
}
