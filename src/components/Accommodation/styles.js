export default theme => ({
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
  accommodationSection: {
    color: theme.palette.primary.main,
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
  },
  paperWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    width: 'fit-content',
    padding: theme.spacing.unit,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
})
