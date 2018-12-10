package com.asansoft.util;

import com.asansoft.codes.BankIbanCodes;

import java.math.BigInteger;

/**
 * Created by mohammad on 3/7/17.
 */
public class IbanUtils {

  public static String getIbanFromAccount(String bankCode, String account , boolean isLoan) {
    if (BankIbanCodes.valueOf(bankCode).equalsIgnoreCase("نامشخص"))
      return null;
    if (bankCode.equals("51")|bankCode.equals("55")|bankCode.equals("56")|bankCode.equals("58")|bankCode.equals("59")) {
      return calculateESSSTIban(bankCode,account);
    } else if (bankCode.equals("54")) {
      return calculateParsianIban(bankCode, account);
    } else if (bankCode.equals("57")) {
      return calculatePasargadIban(bankCode, account);
    } else if (bankCode.equals("18")) {
      return calculateTejaratIban(bankCode, account);
    } else if (bankCode.equals("11")|bankCode.equals("16")|bankCode.equals("20")|bankCode.equals("53")) {
      return calculateSSKKIban(bankCode, account);
    }
    else if (bankCode.equals("13")) {
      return calculateRefahIban(bankCode, account);
    }
    else if (bankCode.equals("15")) {
      return calculateSepahIban(bankCode, account);
    } else if (bankCode.equals("19")) {
      return calculateSaderatIban(bankCode, account);
    } else if (bankCode.equals("14")) {
      return calculateMaskanIban(bankCode, account);
    } else if (bankCode.equals("12")) {
      return calculateMellatIban(bankCode, account);
    } else if (bankCode.equals("17")) {
      return calculateMelliIban(bankCode, account);
    } else
      return calculateStandardIban(bankCode, account);

  }

  private static String calculateStandardIban(String bankCode, String account) {
    String bban = bankCode + String.format("%019d", Long.valueOf(account)) + "182700";
    BigInteger checkDigitBigInt = new BigInteger(bban);
    int checkDigitNumber = 98 - checkDigitBigInt.mod(new BigInteger("97")).intValue();
    String checkDigit = String.format("%02d", checkDigitNumber);
    String iban = "IR" + checkDigit + "0" + bankCode + "000000" + account;
    return iban;
  }

  public static String calculateESSSTIban(String bankCode, String account) {
    String[] parts = account.split("-");
    String parts0 = String.format("%04d" , Long.valueOf(parts[0]));
    String parts1 = String.format("%03d" , Long.valueOf(parts[1]));
    String parts2 = String.format("%08d" , Long.valueOf(parts[2]));
    String parts3 = String.format("%03d" , Long.valueOf(parts[3]));
    String originalAccount = parts0 + parts1 + parts2 + parts3;
    String bban = bankCode + String.format("%019d", Long.valueOf(originalAccount)) + "182700";
    BigInteger checkDigitBigInt = new BigInteger(bban);
    int checkDigitNumber = 98 - checkDigitBigInt.mod(new BigInteger("97")).intValue();
    String checkDigit = String.format("%02d", checkDigitNumber);
    String iban = "IR" + checkDigit + "0" + bankCode + String.format("%019d", Long.valueOf(originalAccount));
    return iban;
  }

  public static String calculateParsianIban(String bankCode, String account) {
    String bban=null;
    String[] parts = account.split("-");
    if (parts.length==3){

      String parts0 = String.format("%03d" , Long.valueOf(parts[0]));
      String parts1 = String.format("%08d" , Long.valueOf(parts[1]));
      String parts2 = String.format("%03d" , Long.valueOf(parts[2]));
      String originalAccount = parts0 + parts1 + parts2;
      bban = bankCode + String.format("%019d", Long.valueOf(originalAccount)) + "182700";
    }
    else if (parts.length==5){
      String parts0 = String.format("%04d" , Long.valueOf(parts[0]));
      String parts1 = String.format("%03d" , Long.valueOf(parts[0]));
      String parts2 = String.format("%08d" , Long.valueOf(parts[1]));
      String parts3 = String.format("%03d" , Long.valueOf(parts[2]));
      String originalAccount = parts0 + parts1 + parts2;
      bban = bankCode + String.format("%019d", Long.valueOf(originalAccount)) + "182700";
    }
    BigInteger checkDigitBigInt = new BigInteger(bban);
    int checkDigitNumber = 98 - checkDigitBigInt.mod(new BigInteger("97")).intValue();
    String checkDigit = String.format("%02d", checkDigitNumber);
    String iban = "IR" + checkDigit + "0" + bankCode + bban.substring(0, bban.length() - 6);
    return iban;
  }

  private static String calculatePasargadIban(String bankCode, String account) {
    return calculateESSSTIban(bankCode,account);
  }

  public static String calculateTejaratIban(String bankCode, String account) {
    String bban = bankCode + String.format("%019d", Long.valueOf(account)) + "182700";
    BigInteger checkDigitBigInt = new BigInteger(bban);
    int checkDigitNumber = 98 - checkDigitBigInt.mod(new BigInteger("97")).intValue();
    String checkDigit = String.format("%02d", checkDigitNumber);
    String iban = "IR" + checkDigit + "0" + bankCode + String.format("%019d", Long.valueOf(account));
    return iban;
  }

  private static String calculateSSKKIban(String bankCode, String account) {
    return calculateTejaratIban(bankCode,account);
  }

  //document has problem must be 17 for 18 must be 01 or 03 for 1 and 3
  public static String calculateRefahIban(String bankCode, String account) {
    String bban = bankCode + "01" + String.format("%017d", Long.valueOf(account)) + "182700";
    BigInteger checkDigitBigInt = new BigInteger(bban);
    int checkDigitNumber = 98 - checkDigitBigInt.mod(new BigInteger("97")).intValue();
    String checkDigit = String.format("%02d", checkDigitNumber);
    String iban = "IR" + checkDigit + "0" + bankCode + "01" + String.format("%017d", Long.valueOf(account));
    return iban;
  }

  // must have branch code 0000-23123123123
  public static String calculateSepahIban(String bankCode, String account) {
    String bban;
    if (account.contains("-")){
      String[] parts = account.split("-");
      String parts0 = String.format("%08d" , Long.valueOf(parts[0]));
      String parts1 = String.format("%010d" , Long.valueOf(parts[1]));
      String originalAccount = parts0 + parts1;
      bban = bankCode + "1" + originalAccount + "182700";
    }
    else {
      bban = bankCode + String.format("%019d", Long.valueOf(account)) + "182700";
    }
    BigInteger checkDigitBigInt = new BigInteger(bban);
    int checkDigitNumber = 98 - checkDigitBigInt.mod(new BigInteger("97")).intValue();
    String checkDigit = String.format("%02d", checkDigitNumber);
    String iban = "IR" + checkDigit + "0" + bban.substring(0,bban.length()-6);
    return iban;
  }


  public static String calculateSaderatIban(String bankCode, String account) {
    return calculateSepahIban(bankCode,account);
  }

  private static String calculateMaskanIban(String bankCode, String account) {
    return calculateSepahIban(bankCode,account);
  }

  private static String calculateMellatIban(String bankCode, String account) {
    String bban;
    if (account.contains("-")){
      String[] parts = account.split("-");
      String parts0 = String.format("%05d" , Long.valueOf(parts[0]));
      String parts1 = String.format("%013d" , Long.valueOf(parts[1]));
      String originalAccount = parts0 + parts1;
      bban = bankCode + "1" + originalAccount + "182700";
    }
    else {
      bban = bankCode + String.format("%019d", Long.valueOf(account)) + "182700";
    }
    BigInteger checkDigitBigInt = new BigInteger(bban);
    int checkDigitNumber = 98 - checkDigitBigInt.mod(new BigInteger("97")).intValue();
    String checkDigit = String.format("%02d", checkDigitNumber);
    String iban = "IR" + checkDigit + "0" + bban.substring(0,bban.length()-6);
    return iban;
  }

  private static String calculateMelliIban(String bankCode, String account) {
    return calculateSepahIban(bankCode ,account);
  }

}
