const speechToTextUploadEndpoint = "https://speech.googleapis.com/v1/speech:recognize";

export const uploadAudio = async () => await post()

export const post = async () => {
	console.log('speechToTextUploadEndpoint')

	await fetch(`${speechToTextUploadEndpoint}`, {
		headers:{
			'X-Mashape-Key': process.env.REACT_APP_GOOGLE_KEY,
			'Content-Type': 'application/json; charset=utf-8',
		},
		method: 'POST',
		mode: 'cors',
		body: JSON.stringify({
			"config": {
				"encoding":"WAV",
				"languageCode": "en-US"
			},
			"audio": {
				"uri":"https://storage.cloud.google.com/speech-demo/brooklyn.wav"
			}
		})
	})
    .then(response => {
    	console.log(response)
    	response.json()
    });
}

