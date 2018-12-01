export default theme => ({
  introImgWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    width: '100%',
  },
  introImg: {
    width: '100%',
    maxWidth: '600px',
  },
  accommodationSection: {
    color: theme.palette.primary.main,
  },
  paperWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    width: 'fit-content',
    padding: theme.spacing.unit,
  },
})
