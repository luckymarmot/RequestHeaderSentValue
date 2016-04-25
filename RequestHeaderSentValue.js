var RequestHeaderSentValue = function() {
	this.evaluate = function(context) {

		var exchange = this.req.getLastExchange();

		var headerValue = exchange.getRequestHeaderByName(this.header);
		return headerValue;
	}

	this.text = function(context) {
		return this.req.name + " ➤ " + this.header;
	}
}

RequestHeaderSentValue.identifier = "com.luckymarmot.RequestHeaderSentValue";

RequestHeaderSentValue.title = "Request Header Sent Value";

RequestHeaderSentValue.inputs = [
	InputField("req", "Source Request", "Request"),
	InputField("header", "Header Name", "String")
];

registerDynamicValueClass(RequestHeaderSentValue);

