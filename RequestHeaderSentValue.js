var RequestHeaderSentValue = function() {
	this.evaluate = function(context) {

		var exchange;

		if(this.req !== null) {
			exchange = this.req.getLastExchange();
		} else {
			this.req = context.getCurrentRequest();
			exchange = this.req.getLastExchange();
		}


		var headerValue = exchange.getRequestHeaderByName(this.header);
		return headerValue;
	}

	this.text = function(context) {
		if(this.req !== null) {
			return this.req.name + " ➤ " + this.header;
		}
		return this.header;
	}
}

RequestHeaderSentValue.identifier = "com.luckymarmot.RequestHeaderSentValue";

RequestHeaderSentValue.title = "Request Header Sent Value";

RequestHeaderSentValue.inputs = [
	InputField("req", "Source Request", "Request"),
	InputField("header", "Header Name", "String")
];

registerDynamicValueClass(RequestHeaderSentValue);

