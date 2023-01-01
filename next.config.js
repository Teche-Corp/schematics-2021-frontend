module.exports = {
  async redirects() {
    return [
      {
        source: '/sch-nst/vbg-peserta',
        destination:
          'https://drive.google.com/file/d/1uVJq-zaID3HjTCy9I6iu-kKwR35Nii5V/view',
        permanent: false,
      },
      {
        source: '/sch-nst/live-qna',
        destination: 'https://app.sli.do/event/agsejupf',
        permanent: false,
      },
    ];
  },
};
