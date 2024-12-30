module.exports = {

    plugins: [
        require('flowbite/plugin')
    ] ,
    content: [
        "./src/**/*.{html,js}"
    ]

    theme: {

        extend: {

          colors: {
            'custom-blue': '#005DB5',
          },

        },
        
      },

}


