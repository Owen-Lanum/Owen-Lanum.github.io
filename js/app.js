new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    gap: 0,
    breakpoints: {
        1024: {
          perView: 3
        },
        768: {
            perView: 2
          }
          ,
          550: {
              perView: 1
            }
      }
  }).mount()