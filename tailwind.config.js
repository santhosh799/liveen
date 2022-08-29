module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {

       fontSize:{
         'tenPix':'10px'
       },
       

      flexGrow: {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
      },
         borderRadius:{
            'myrounded':'10px',
            'mysix':'5px',
            'searchRadius':'20px',
            'userCardRadius':'7px',
            'radiusFourPix':'4px',
         },
        colors:{
          'myColor':'#E8FAFF',
          'bordercus':'#0F4391',
          'iconColor':'#0F4391',
          'sideBarColor':'#FAFEFF',
          'breadCumConColor':'#E6E6E6',
          'searchBorderColor':'#B9B9B9',
          'userCardFooterColor':'#7A8089',
          'userCardHeadingColor':'#727272',
          'o-color-one':'#F5F5F5',
          'o-color-two':'#EFEFEF',
          'o-color-three':'#707070',
          'o-color-four':'#545454',
          'o-form-label-color':'#454545',
          'd-color':'#E5E5E5',
          'd-color-2':'#3A3A3A',
          'd-color-3':'#0F4391'
         
         
        },
       width:{
         'mywidth':'100%',
         'mywidth-2':'90%',
         'mywidth-8':'98.5%',
         'mywidth-3':'268px',
         'mywidth-4':'220px',
         'mywidth-5':'69px',
         'mywidth-6':'89px'
       },
      height:{
        'custom-height-2':'38rem',
        'custom-height':'30rem',
        'custom-height-3':'27rem',
        'thirtyPix':'30px',
        'userCardHeight':'109px',
        'oneThirtyTwo':'132px',
        'custom-height-4':'33rem',
        'c-h-316':'316px',
        'c-h-286':'286px'
      },
      border:{
        'border-hero' : 'border:1px solid #474747'
      }
      
     
    },
  },
  plugins: [],
}