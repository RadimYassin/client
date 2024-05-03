import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { defaultStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';

const guestsGroups = [
  {
    name: 'Adults',
    text: 'Ages 13 or above',
    count: 0,
  },
  {
    name: 'Children',
    text: 'Ages 2-12',
    count: 0,
  },
  {
    name: 'Infants',
    text: 'Under 2',
    count: 0,
  },
  {
    name: 'Pets',
    text: 'Pets allowed',
    count: 0,
  },
];

const booking = () => {
  const [openCard, setOpenCard] = useState(0);
  const [groups, setGroups] = useState(guestsGroups);

  const onClearAll = () => {
    setOpenCard(0);
    setGroups(guestsGroups.map(group => ({ ...group, count: 0 })));
  };

  return (
    <BlurView intensity={70} style={styles.container} tint="light">
      {/* Where */}
      <View style={styles.card}>
        {openCard !== 0 ? (
          <TouchableOpacity
            onPress={() => setOpenCard(0)}
            style={styles.cardPreview}>
            <Text style={styles.previewText}>Where</Text>
            <Text style={styles.previewData}>I'm flexible</Text>
          </TouchableOpacity>
        ) : (
          <>
            <Text style={styles.cardHeader}>Where to?</Text>
            <View style={styles.cardBody}>
              <View style={styles.searchSection}>
                <TextInput
                  style={styles.inputField}
                  placeholder="Search destinations"
                  placeholderTextColor={Colors.grey}
                />
              </View>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.placesContainer}>
                {/* Render places here */}
              </ScrollView>
            </View>
          </>
        )}
      </View>

      {/* When */}
      {/* Add When section here */}

      {/* Guests */}
      <View style={styles.card}>
        {openCard !== 2 ? (
          <TouchableOpacity
            onPress={() => setOpenCard(2)}
            style={styles.cardPreview}>
            <Text style={styles.previewText}>Who</Text>
            <Text style={styles.previewData}>Add guests</Text>
          </TouchableOpacity>
        ) : (
          <>
            <Text style={styles.cardHeader}>Who's coming?</Text>
            <View style={styles.cardBody}>
              {groups.map((item, index) => (
                <View
                  key={index}
                  style={[
                    styles.guestItem,
                    index + 1 < guestsGroups.length ? styles.itemBorder : null,
                  ]}>
                  <View>
                    <Text style={styles.guestName}>{item.name}</Text>
                    <Text style={styles.guestText}>{item.text}</Text>
                  </View>

                  <View style={styles.guestCounter}>
                    <TouchableOpacity
                      onPress={() => {
                        const newGroups = [...groups];
                        newGroups[index].count =
                          newGroups[index].count > 0 ? newGroups[index].count - 1 : 0;
                        setGroups(newGroups);
                      }}>
                      <Ionicons
                        name="remove-circle-outline"
                        size={26}
                        color={item.count > 0 ? Colors.grey : '#cdcdcd'}
                      />
                    </TouchableOpacity>
                    <Text style={styles.guestCount}>{item.count}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        const newGroups = [...groups];
                        newGroups[index].count++;
                        setGroups(newGroups);
                      }}>
                      <Ionicons name="add-circle-outline" size={26} color={Colors.grey} />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          </>
        )}
      </View>

      {/* Footer */}
      <View style={defaultStyles.footer}>
        <TouchableOpacity
          onPress={onClearAll}>
          <Text style={styles.clearButton}>Clear all</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[defaultStyles.btn, { paddingRight: 20, paddingLeft: 50 }]}
          onPress={() => console.log('Search')}>
          <Ionicons
            name="search-outline"
            size={24}
            style={defaultStyles.btnIcon}
            color={'#fff'}
          />
          <Text style={defaultStyles.btnText}>Search</Text>
        </TouchableOpacity>
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    margin: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  cardHeader: {
    fontFamily: 'mon-b',
    fontSize: 24,
    padding: 20,
  },
  cardBody: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  cardPreview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  searchSection: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ABABAB',
    borderRadius: 8,
    marginBottom: 16,
  },
  inputField: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  placesContainer: {
    flexDirection: 'row',
  },
  previewText: {
    fontFamily: 'mon-sb',
    fontSize: 14,
    color: Colors.grey,
  },
  previewData: {
    fontFamily: 'mon-sb',
    fontSize: 14,
    color: Colors.dark,
  },
  guestItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  itemBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.grey,
  },
  guestName: {
    fontFamily: 'mon-sb',
    fontSize: 14,
  },
  guestText: {
    fontFamily: 'mon',
    fontSize: 14,
    color: Colors.grey,
  },
  guestCounter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  guestCount: {
    fontFamily: 'mon',
    fontSize: 16,
    minWidth: 18,
    textAlign: 'center',
  },
  clearButton: {
    fontSize: 18,
    fontFamily: 'mon-sb',
    textDecorationLine: 'underline',
  },
});

export default booking;
