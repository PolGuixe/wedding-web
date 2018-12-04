export default theme => ({
  mapWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
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
  },
  daySection: {
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit,
  },
  map: {
    width: '100%',
    height: '350px',
  },
})
