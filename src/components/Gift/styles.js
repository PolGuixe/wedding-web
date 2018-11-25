export default theme => ({
  giftSection: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
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
})
