new Vue({
    el: '#app',
    data: {
        categories: [
            {
                name: 'Cloud',
                families: [
                    {
                        name: 'AWS',
                        tools: [
                            {
                                name: "ec2",
                                usages: ["chrzasz.cz"]
                            },
                            {
                                name: "lambda"
                            }
                        ]
                    }
                ]
            }
        ]
    }
})