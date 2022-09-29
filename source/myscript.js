document.addEventListener("yourCustomEvent", function (e) {
	var data = e.detail;
	console.log("received", data);
	window.__dc_resources.dispatch({
		type: "write-component-data",
		componentId: "80987fcc-dd04-46a8-a323-b986e0ad8bcc",
		key: "script",
		value: data.text,
	});
});
