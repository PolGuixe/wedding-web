export default theme => ({
  mapWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    width: '100%',
  },
  expansionDetailsText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing.unit,
  },
  travelSection: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
  },
  daySection: {
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit,
  },
  map: {
    width: '600px',
    maxWidth: '100%',
    height: '300px',
  },
})
