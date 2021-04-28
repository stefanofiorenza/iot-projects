package com.knits.iot.mqtt;

import org.eclipse.paho.client.mqttv3.IMqttClient;
import org.eclipse.paho.client.mqttv3.MqttClient;
import org.eclipse.paho.client.mqttv3.MqttMessage;

import java.util.Random;
import java.util.UUID;



public class MqttPublisher {




    public static final int MESSAGES = 50;

    private IMqttClient client;
    private static final Random rnd = new Random();

    public static void main(String[] args) {

        try {
            String deviceId = "Device#"+UUID.randomUUID().toString();
            IMqttClient client= new MqttClient(MqttDemoUtils.HOST, deviceId);
            client.connect(MqttDemoUtils.connectionOptions());

            for (int i=0; i<MESSAGES; i++){
                byte[] payload =readSensorDataAsBytes();
                sendMessage(client,payload);
                Thread.sleep(500L);
                System.out.println("Message sent to : "+MqttDemoUtils.TOPIC);
            }

            client.disconnect(2000L);;


        } catch (Exception e) {
            e.printStackTrace();
        }
    }






    private static void sendMessage(IMqttClient client,byte[] payload) throws Exception{
        MqttMessage msg = new MqttMessage(payload);
        client.publish(MqttDemoUtils.TOPIC,msg);
    }

    /**
     * This method simulates reading the engine temperature
     * @return
     */

    private static byte[] readSensorDataAsBytes(){
        double temp =  80 + rnd.nextDouble() * 20.0;
        byte[] payload = String.format("T:%04.2f",temp).getBytes();
        return payload;
    }

}
