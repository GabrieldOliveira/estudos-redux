import React, { Component } from 'react';

import { View, Text, FlatList } from 'react-native';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';

import FavoriteItem from './componentes/FavoriteItem';

class favorites extends Component {
  static navigationOptions = {
    title: 'Meus Favoritos',
  };

  static propTypes = {
    favorites: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
      }),
    ).isRequired,
  };

  renderList = () => (
    <FlatList
      data={this.props.favorites}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <FavoriteItem favorite={item} />}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        {!this.props.favorites.length ? (
          <Text style={styles.empty}>Nenhum favorito adicionado</Text>
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
const mapStateToProps = state => ({
  favorites: state.favorites.data,
});

export default connect(mapStateToProps)(favorites);
