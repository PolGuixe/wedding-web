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
  expansionDetailsText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing.unit,
  },
  agendaSection: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  daySection: {
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit,
  },
})
