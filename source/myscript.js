window.__dc_resources.dispatcher.register((action) => {
	if (action.type === "open-script-editor") {
		window.postMessage({ type: "opened-script", id: action.path[0] }, "*");
	}
});

document.addEventListener("yourCustomEvent", function (e) {
	var data = e.detail;
	console.log("received", data);
	window.__dc_resources.dispatch({
		type: "write-component-data",
		componentId: data.id,
		key: "script",
		value: data.text,
	});
});
