export default theme => ({
  rsvpDarkSection: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  introImgWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    width: '100%',
  },
  introImg: {
    width: '100%',
    maxWidth: '600px',
  },
  buttonWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    fontSize: '18px',
  },
})
