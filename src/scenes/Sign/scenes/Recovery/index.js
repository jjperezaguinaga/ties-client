import Button from '../../../../components/Button'

const phrase = 'remnant punisher sarcasm chapped epidemic deviation oxidize glaring pantry paltry raving hesitancy'

class SignRecovery extends Component {
  static propTypes = {
    wallet: PropTypes.shape({
      address: PropTypes.string,
      phrase: PropTypes.string
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <div className={styles.SignRecoveryTitle}>
          Recovery Information
        </div>

        {this.props.wallet && (
          <div>
            {this.props.wallet.address && (
              <div className={styles.SignRecoveryBlock}>
                <div className={styles.SignRecoveryBlockTitle}>
                  Your wallet address / Ties.Network login
                </div>

                <Button>
                  87ajw408ha0g456y3485asiedfalskje54932aJDKEFJ
                </Button>
              </div>
            )}

            {this.props.wallet.phrase && (
              <div className={styles.SignRecoveryBlock}>
                <div className={styles.SignRecoveryBlockTitle}>
                  Wallet recovery phrase <i>(12 words)</i>
                </div>

                <div className={styles.SignRecoveryPhrase}>
                  {this.props.wallet.phrase.split(' ').map((word, index) => (
                    <div
                      className={styles.SignRecoveryPhraseWord}
                      key={index}
                    >
                      {word}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <div className={styles.SignRecoveryBlock}>
          <strong>Attention!</strong> Keep your phrase safe!
          Its lose will result in lose of access to your account and lose of money
        </div>

        <div className={styles.SignRecoveryActions}>
          <Button solid>
            Continue
          </Button>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({ wallet: state.entities.wallets[state.services.session.userId] })
)(SignRecovery)