/**
 * Write a java function that will ping any host ( given as input ) and computes the median of the time taken to ping.
 * Use the system ping utility, do not use any deprecated methods.
 */
package Assignment3;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Ping {
	@SuppressWarnings("resource")
	public static void main(String args[]) throws IOException {
		System.out.println("Enter the host name: ");
		Scanner sc = new Scanner(System.in);
		// scanning the hostname from the user
		String hostname = sc.next();
		// create the ping command as a list of strings
		Ping ping = new Ping();
		List<String> commands = new ArrayList<String>();
		commands.add("ping");
		commands.add("-c");
		commands.add("4");
		commands.add(hostname);
		ping.doCommand(commands);
	}

	public void doCommand(List<String> command) throws IOException {
		String s = null;
		// creating a process builder to execute the commands
		ProcessBuilder pb = new ProcessBuilder(command);
		Process process = pb.start();
		// creating a buffered reader for reading the output produced by executing the
		// command
		BufferedReader stdInput = new BufferedReader(new InputStreamReader(process.getInputStream()));
		BufferedReader Error = new BufferedReader(new InputStreamReader(process.getErrorStream()));
		// storing the time in a arraylist
		ArrayList<Double> timeList = new ArrayList<Double>();
		while ((s = stdInput.readLine()) != null) {
			int timeIndex = 0;
			if (s.contains("time=")) {
				timeIndex = s.indexOf("time=") + 5;
				timeList.add(Double.parseDouble(s.substring(timeIndex, s.length() - 3)));
			}
		}
		// code for calculating the median time
		if (timeList.size() > 0) {
			int n = timeList.size();
			double median = 0;
			if (n % 2 == 0) {
				median = (timeList.get(n / 2) + timeList.get((n - 1) / 2)) / 2;
			} else {
				median = timeList.get(n / 2);
			}
			// printing the median time
			System.out.println("Median time : " + median);
		}
		// code for printing the error messages (if any)
		else {
			while ((s = Error.readLine()) != null) {
				System.out.println(s);
			}
		}
	}
}
