import java.awt.image.BufferedImage;
import java.io.File;
import java.math.BigDecimal;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

import javax.imageio.ImageIO;

public class HRProcessor {
	
	static class Star {
		
		int size;
		String colorName;
		String color;
		
		Star(int r, int c, String color) {
			this.color = color;
			
			// size
			if (r < 150) {
				size = 4;
			} else if (r < 260) {
				size = 3;
			} else if (r < 460) {
				size = 2;
			} else {
				size = 1;
			}
			
			// color
			if (c < 130) {
				colorName = "blue";
			} else if (c < 200) { 
				colorName = "white";
			} else if (c < 320) {
				colorName = "yellow";
			} else if (c < 400) {
				colorName = "orange";				
			} else if (c < 550) {
				colorName = "red";
			} else {
				colorName = "brown";
			}
			
		}
		
		public String toString() {
			return colorName + "\t" + size;
		}
		
	}
	
	public static void main(String... args) throws Exception {

		Path currentRelativePath = Paths.get("");
		String s = currentRelativePath.toAbsolutePath().toString();
		System.out.println("Current relative path is: " + s);
		
		BufferedImage img = ImageIO.read(new File("HRDiagram.bmp"));
		
		
		Map<String, Double> stars = new HashMap<String, Double>();
		Double total = 0.0;

		System.out.println(img.getHeight() + " x " + img.getWidth());

		for (int r = 1; r < img.getHeight() - 1; r++) {
			for (int c = 1; c < img.getWidth() - 1; c++){
				int color = img.getRGB(c, r);
				String colorHex = Integer.toHexString(color & 0xffffff);
				System.out.println("(" + r + "," + c + ") " + color + " " + colorHex);
				if (color > -16777216) {
					total++;
					Star star = new Star(r, c, colorHex);
					String k = star.toString();
					if (stars.containsKey(k)) {
						Double count = stars.get(k);
						count++;
						stars.put(k, count);
					} else {
						stars.put(k, 1.0);
					}
				}

			}
		}
		
		System.out.println("total: " + total);
		for (Entry<String, Double> e : stars.entrySet()) {
			String k = e.getKey();
			Double v = e.getValue();
			Double pct = (v / total); 
			System.out.println(k + "\t" + Math.ceil(pct * 100));
		}
		
	}

}
