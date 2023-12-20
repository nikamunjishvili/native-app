import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import Modal from 'react-native-modal';

interface PropsTypes {
  isChecked: boolean;
  onAccept: (bool: boolean) => void;
}
const TermsAndConditions = ({isChecked, onAccept}: PropsTypes) => {
  const [isModalShown, setIsModalShown] = useState(false);

  return (
    <>
      <Modal
        isVisible={isModalShown}
        onBackdropPress={() => setIsModalShown(false)}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text>Terms And conditions</Text>

            <Pressable hitSlop={10} onPress={() => setIsModalShown(false)}>
              <Text>X</Text>
            </Pressable>
          </View>

          <Text>
            შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და
            ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად
            მიახლოებული შაბლონი წარუდგინონ შემფასებელს. ხშირადაა შემთხვევა,
            როდესაც დიზაინის შესრულებისას საჩვენებელია, თუ როგორი იქნება ტექსტის
            ბლოკი. სწორედ ასეთ დროს არის მოსახერხებელი ამ გენერატორით შექმნილი
            ტექსტის გამოყენება, რადგან უბრალოდ „ტექსტი ტექსტი ტექსტი“ ან სხვა
            გამეორებადი სიტყვების ჩაყრა, ხელოვნურ ვიზუალურ სიმეტრიას ქმნის და
            არაბუნებრივად გამოიყურება. შემთხვევითად გენერირებული ტექსტი ეხმარება
            დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან
            მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს. ხშირადაა
            შემთხვევა, როდესაც დიზაინის შესრულებისას საჩვენებელია, თუ როგორი
            იქნება ტექსტის ბლოკი. სწორედ ასეთ დროს არის მოსახერხებელი ამ
            გენერატორით შექმნილი ტექსტის გამოყენება, რადგან უბრალოდ „ტექსტი
            ტექსტი ტექსტი“ ან სხვა გამეორებადი სიტყვების ჩაყრა, ხელოვნურ
            ვიზუალურ სიმეტრიას ქმნის და არაბუნებრივად გამოიყურება. შემთხვევითად
            გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის
            შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ
            შემფასებელს. ხშირადაა შემთხვევა, როდესაც დიზაინის შესრულებისას
            საჩვენებელია, თუ როგორი იქნება ტექსტის ბლოკი. სწორედ ასეთ დროს არის
            მოსახერხებელი ამ გენერატორით შექმნილი ტექსტის გამოყენება
          </Text>

          <Text
            onPress={() => {
              setIsModalShown(false);
              onAccept(true);
            }}>
            ShowModal
          </Text>
        </View>
      </Modal>
    </>
  );
};

export default TermsAndConditions;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
